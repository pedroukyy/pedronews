import { Injectable } from '@angular/core';
import { StorageService } from '../providers/storage.service';
import { EncryptService } from '../providers/encrypt.service';

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string; // encriptada
  country: { id: string; value: string };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'pedronews_user';

  constructor(
    private storage: StorageService,
    private encrypt: EncryptService
  ) {}

  /** Registra un nuevo usuario */
  async register(user: Omit<User, 'id'>): Promise<User | null> {
    if (!user.email || !user.password) {
      console.error('Datos de usuario incompletos');
      return null;
    }

    try {
      const id = crypto.randomUUID();
      const encryptedPassword = this.encrypt.encrypt(user.password);
      const newUser: User = { ...user, id, password: encryptedPassword };
      await this.storage.set(this.storageKey, newUser);
      return newUser;
    } catch (error) {
      console.error('Error registrando usuario:', error);
      return null;
    }
  }

  /** Inicia sesión verificando email y contraseña */
  async login(email: string, password: string): Promise<boolean> {
    try {
      const savedUser = await this.storage.get<User>(this.storageKey);
      if (!savedUser) return false;

      const matchEmail = savedUser.email === email;
      const matchPass = this.encrypt.compare(password, savedUser.password);

      return matchEmail && matchPass;
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    }
  }

  /** Obtiene el usuario guardado */
  async getUser(): Promise<User | null> {
    return await this.storage.get<User>(this.storageKey);
  }

  /** Actualiza datos del usuario */
  async updateUser(updated: Partial<User>) {
    const current = await this.getUser();
    if (!current) return;
    const merged = { ...current, ...updated };
    await this.storage.set(this.storageKey, merged);
  }

  /** Cierra sesión */
  async logout() {
    await this.storage.remove(this.storageKey);
  }
}

