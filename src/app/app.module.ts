import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActiveStrainListComponent } from './components/active-strain-list/active-strain-list.component';
import { StrainPreviewComponent } from './components/strain-preview/strain-preview.component';
import { StrainDetailComponent } from './components/strain-detail/strain-detail.component';
import { ActiveBuyerListComponent } from './components/active-buyer-list/active-buyer-list.component';
import { BuyerPreviewComponent } from './components/buyer-preview/buyer-preview.component';
import { BuyerDetailComponent } from './components/buyer-detail/buyer-detail.component';
import { ActiveVendorListComponent } from './components/active-vendor-list/active-vendor-list.component';
import { VendorPreviewComponent } from './components/vendor-preview/vendor-preview.component';
import { VendorDetailComponent } from './components/vendor-detail/vendor-detail.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { SaleComponent } from './components/sale/sale.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { TipComponent } from './components/tip/tip.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BurnNoticeComponent } from './components/burn-notice/burn-notice.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NewXferComponent } from './components/new-xfer/new-xfer.component';
import { ActiveFrontListComponent } from './components/active-front-list/active-front-list.component';
import { ActiveXferListComponent } from './components/active-xfer-list/active-xfer-list.component';
import { ActiveOrderListComponent } from './components/active-order-list/active-order-list.component';
import { XferBottomSheetComponent } from './components/xfer-bottom-sheet/xfer-bottom-sheet.component';

import { StrainSelectComponent } from './components/strain-select/strain-select.component';
import { BuyerSelectComponent } from './components/buyer-select/buyer-select.component';
import { VendorSelectComponent } from './components/vendor-select/vendor-select.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,MatBottomSheetModule } from '@angular/material';

declare var buddyModule:any;

const appRoutes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:DashComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ActiveStrainListComponent,
    StrainPreviewComponent,
    StrainDetailComponent,
    ActiveBuyerListComponent,
    BuyerPreviewComponent,
    BuyerDetailComponent,
    ActiveVendorListComponent,
    VendorPreviewComponent,
    VendorDetailComponent,
    TransactionComponent,
    SaleComponent,
    PurchaseComponent,
    TipComponent,
    LoginComponent,
    DashComponent,
    BurnNoticeComponent,
    NewOrderComponent,
    NewXferComponent,
    ActiveFrontListComponent,
    ActiveXferListComponent,
    XferBottomSheetComponent,
    ActiveOrderListComponent,
    StrainSelectComponent,
    BuyerSelectComponent,
    VendorSelectComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule
  ],
  entryComponents:[XferBottomSheetComponent],
  providers: [
    CookieService,
    {provide:'API_ENDPOINT',useValue:'http://api.outlawdesigns.io:4663'},
    {provide:'AUTH_TOKEN',useValue:'1234'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
