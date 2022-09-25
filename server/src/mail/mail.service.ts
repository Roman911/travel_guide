import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { google } from 'googleapis';
import {
  API_URL,
  USER,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  GOOGLE_DEVELOPERS,
} from '../config';

const OAuth2 = google.auth.OAuth2;

@Injectable()
export class MailService {
  private accessToken: any;
  private oauth2Client: any;
  private transporter: any;
  constructor() {
    this.oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, GOOGLE_DEVELOPERS);

    this.oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });

    this.accessToken = new Promise((resolve, reject) => {
      this.oauth2Client.getAccessToken((err, token) => {
        try {
          resolve(token);
        } catch (error) {
          reject('Failed to create access token :(');
        }
      });
    });

    this.transporter = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: USER,
        accessToken: this.accessToken,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
      },
    });
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: USER,
      to,
      subject: `Активація акаунта на ${API_URL}`,
      text: '',
      html: `
        <div>
          <h1>Для активації перейдіть по силці</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}
