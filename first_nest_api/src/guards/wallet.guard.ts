import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { load } from 'ts-dotenv';
const env = load({
  Admin_Wallet: String,
});

@Injectable()
export class WalletGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    //console.log(env.Admin_Wallet);
    //console.log(request);
    //const isAdmin = (request.user.wallet === env.Admin_Wallet) ;
    return true;
  }
}
