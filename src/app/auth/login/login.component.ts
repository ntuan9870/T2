import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
// import { AuthService } from 'src/app/services/auth.service';
import {AuthService1Service} from 'src/app/services/auth-service1.service';
import {AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider} from 'ng4-social-login';
import { HttpClient } from '@angular/common/http';
declare function showSwal(type,message):any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public check = false;
  public user:User = null;
  public wrongacc = '';
  public siteKey:string = '';
  public captcha = false;

  public userSocial :any=SocialUser;

  constructor(private http:HttpClient,private authService:AuthService1Service,private router:Router,private location:Location,private socialAuthService:AuthService) { }

  facebookLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.http.post('http://localhost:8000/api/auth/checkemailSocial',{
        email:userData.email,
        name:userData.name,
      }).subscribe(
        res=>{
          if(res['result']=='success'){
            if(!sessionStorage.getItem('wrong')){
              sessionStorage.removeItem('wrong');
            }
            this.wrongacc = '';
            this.user=res['user'];
            if(this.user.user_level==3){
              if(sessionStorage.getItem('thanhtoan')){
                this.router.navigate(['/cart/thanhtoan/null']);
              }else{
                this.router.navigate(['../']);
              }
            }else{
              this.dangnhapsai();
            }
            this.saveSession();
            showSwal('auto-close','Đăng nhập thành công!');
          }else{
            this.dangnhapsai();
          }
        }
      );
    });
  }
  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.http.post('http://localhost:8000/api/auth/checkemailSocial',{
        email:userData.email,
        name:userData.name,
      }).subscribe(
        res=>{
          if(res['result']=='success'){
            if(!sessionStorage.getItem('wrong')){
              sessionStorage.removeItem('wrong');
            }
            this.wrongacc = '';
            this.user=res['user'];
            if(this.user.user_level==3){
              if(sessionStorage.getItem('thanhtoan')){
                this.router.navigate(['/cart/thanhtoan']);
              }else{
                this.router.navigate(['../']);
              }
            }else{
              this.dangnhapsai();
            }
            this.saveSession();
            showSwal('auto-close','Đăng nhập thành công!');
          }else{
            this.dangnhapsai();
          }
        }
      );
    });
  }
  ngOnInit(): void {
    this.siteKey = '6Leua30aAAAAAPcbBAScg5pPnWyMRk__PxLGISXg';
    // this.siteKey = '6LfA2NkZAAAAAEL3YAclo_5tv58ouFCkrsitmE9z';
    if(localStorage.getItem('user_level')||sessionStorage.getItem('user_level')){
      this.router.navigate(['../']);
    }
  }

  login(){
    const fd = new FormData();
    fd.append('user_email',this.email);
    fd.append('user_password',this.password);
    this.authService.dangnhap(fd).subscribe(
      res=>{
        if(res['result']=='success'){
          if(!sessionStorage.getItem('wrong')){
            sessionStorage.removeItem('wrong');
          }
          this.wrongacc = '';
          this.user=res['user'];
          if(this.user.user_level==3){
            if(sessionStorage.getItem('thanhtoan')){
              this.router.navigate(['/cart/thanhtoan/null']);
            }else{
              this.router.navigate(['../']);
            }
          }else{
            this.dangnhapsai();
          }
          if(this.check){
            this.saveLocal();
          }else{
            this.saveSession();
          }
          showSwal('auto-close','Đăng nhập thành công!');
        }else{
          this.dangnhapsai();
        }
      },error=>{
        alert('Có lỗi trong quá trình xử lý thông tin!');
      }
    );
  }

  dangnhapsai(){
    if(!sessionStorage.getItem('wrong')){
      sessionStorage.setItem('wrong','0');
    }
    var k:number = parseInt(sessionStorage.getItem('wrong'))+1;
    if(k>3){
      this.router.navigate(['/auth/forgotpassword/sendemail']);
      showSwal('auto-close','Bạn đã đăng nhập sai quá 3 lần!');
    }
    sessionStorage.setItem('wrong', k.toString());
    this.wrongacc = 'Sai lần ' + k +'! (Nếu nhập sai quá 3 lần hệ thống sẽ chuyển qua trang quên mật khẩu!)';
    showSwal('auto-close','Tên đăng nhập hoặc mật khẩu không đúng!');
  }

  saveLocal(){
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('user_id', this.user.user_id);
      localStorage.setItem('user_name', this.user.user_name);
      localStorage.setItem('user_email', this.user.user_email);
      localStorage.setItem('user_phone', this.user.user_phone);
      localStorage.setItem('user_level', this.user.user_level);
      // localStorage.getItem('key');
    } else {
      showSwal('auto-close','Trình duyệt của bạn không hỗ trợ Storage');
    }
  }

  saveSession(){
    if ( typeof(Storage) !== 'undefined') {
      sessionStorage.setItem('user_id', this.user.user_id);
      sessionStorage.setItem('user_name', this.user.user_name);
      sessionStorage.setItem('user_email', this.user.user_email);
      sessionStorage.setItem('user_phone', this.user.user_phone);
      sessionStorage.setItem('user_level', this.user.user_level);
    } else {
      showSwal('auto-close','Trình duyệt của bạn không hỗ trợ Storage');
    }
  }
  handleSuccess(event){
    this.captcha = true;
  }

}
