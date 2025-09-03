import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  encrypt(value: string): string {
    return CryptoJS.SHA256(value).toString();
  }

  compare(value: string, hashed: string): boolean {
    return this.encrypt(value) === hashed;
  }
}

