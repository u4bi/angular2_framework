import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
/**
 * ngModel을 사용 위한 FormsModule 모듈을 임포트
 */

import { AppComponent }  from './app.component';
/**
 * app.component내의 AppComponent를 임포트함.
*/
import { ItemDetailComponent } from './item-detail.component';
/**
 * 컴포넌트 분리로 인해 추가
 */
@NgModule({
  /**
   * NgModule단에 FormsModule을 추가함 
   */
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ItemDetailComponent
    /* 추가*/
  ],
  bootstrap: [
    AppComponent
  ]
})
/**
 * ngModule 내에서의 Dependency는 공유된다
 * 
 * ngModule에서 dependency를 관리하고 실제 사용하는 dependency를 한 눈에 다 볼 수 있음.
 * 뿐만 아니라, 코드도 더 간결해짐.
 * 
 * ngModule이 JavaScript의 module과 같이 module 단위로 scope를 갖음.
 * 
 * ngModule에 명시된 Component들은 ngModule에 명시된 dependencie 객체들
 * 을 자유롭게 사용할 수 있다.
 * 
 * 부트스트래핑 AppComponent
 */
export class AppModule { }
