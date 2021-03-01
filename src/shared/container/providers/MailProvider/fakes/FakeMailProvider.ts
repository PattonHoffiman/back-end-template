import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(data: ISendMailDTO): Promise<string | false> {
    if (data.from) return false;

    this.messages.push({
      to: data.to.email,
      body: 'fake-message',
    });

    return 'fake-link';
  }
}
