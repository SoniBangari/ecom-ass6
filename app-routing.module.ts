import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';
import { ProfilrComponent } from './profilr/profilr.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "profile",
    component: ProfilrComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent,
    // children: [
    //   {
    //     path: "create",
    //     component: CreateComponent
    //   },
    //   {
    //     path: "view",
    //     component: ViewComponent
    //   },
    //   {
    //     path: "edit",
    //     component: EditComponent
    //   }
    // ]
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "market",
    component: MarketComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "user/create",
    component: CreateComponent
  },
  {
    path: "user/view/:id",
    component: ViewComponent
  },
  {
    path: "user/edit",
    component: EditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
