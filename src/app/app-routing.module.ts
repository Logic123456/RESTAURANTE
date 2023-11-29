import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'swipper',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search-chef',
    loadChildren: () => import('./pages/search-chef/search-chef.module').then( m => m.SearchChefPageModule)
  },
  {
    path: 'profile-menu',
    loadChildren: () => import('./pages/popup/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/popup/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'book-achef',
    loadChildren: () => import('./pages/book-achef/book-achef.module').then( m => m.BookAchefPageModule)
  },
  {
    path: 'change-address',
    loadChildren: () => import('./pages/change-address/change-address.module').then( m => m.ChangeAddressPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./pages/components/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'my-favourite',
    loadChildren: () => import('./pages/my-favourite/my-favourite.module').then( m => m.MyFavouritePageModule)
  },
  {
    path: 'your-order',
    loadChildren: () => import('./pages/your-order/your-order.module').then( m => m.YourOrderPageModule)
  },
  {
    path: 'chef-details',
    loadChildren: () => import('./pages/chef-details/chef-details.module').then( m => m.ChefDetailsPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'swipper',
    loadChildren: () => import('./pages/swipper/swipper.module').then( m => m.SwipperPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'touch-id',
    loadChildren: () => import('./pages/touch-id/touch-id.module').then( m => m.TouchIdPageModule)
  },
  {
    path: 'face-id',
    loadChildren: () => import('./pages/face-id/face-id.module').then( m => m.FaceIdPageModule)
  },
  {
    path: 'verify-phone',
    loadChildren: () => import('./pages/verify-phone/verify-phone.module').then( m => m.VerifyPhonePageModule)
  },
  {
    path: 'otp-page',
    loadChildren: () => import('./pages/otp-page/otp-page.module').then( m => m.OtpPagePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog-post/:id',
    loadChildren: () => import('./pages/blog-post/blog-post.module').then( m => m.BlogPostPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
