import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { CthComponent } from './tools/cth/cth.component';
import { EnumComponent } from './tools/enum/enum.component';
import { BlogComponent } from './blog/blog.component';
import { Post0Component } from './blog/post0/post0.component';
import { Post1Component } from './blog/post1/post1.component';
import { Post2Component } from './blog/post2/post2.component';
import { AboutComponent } from './about/about.component';
import { HallOfFameComponent } from './about/hall-of-fame/hall-of-fame.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'tools', component: ToolsComponent },
	{ path: 'tools/cth', component: CthComponent },
	{ path: 'cth', redirectTo: 'tools/cth', pathMatch: 'full' },
	{ path: 'tools/enum', component: EnumComponent },
	{ path: 'enum', redirectTo: 'tools/enum', pathMatch: 'full' },
	{ path: 'blog', component: BlogComponent },
	{ path: 'blog/post0', component: Post0Component },
	{ path: 'cG9zdDAK', redirectTo: 'blog/post0', pathMatch: 'full' },
	{ path: 'blog/post1', component: Post1Component },
	{ path: 'cG9zdDEK', redirectTo: 'blog/post1', pathMatch: 'full' },
	{ path: 'blog/post2', component: Post2Component, pathMatch: 'full' },
	{ path: 'cG9zdDIK', redirectTo: 'blog/post2', pathMatch: 'full'},
	{ path: 'about', component: AboutComponent },
	{ path: '0xblackbird', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'h4ck3r', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about/hall-of-fame', component: HallOfFameComponent, pathMatch: 'full' },
	{ path: 'hall-of-fame', redirectTo: 'about/hall-of-fame', pathMatch: 'full' },
	{ path: '**', component: HomeComponent } // 404 Status code
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
