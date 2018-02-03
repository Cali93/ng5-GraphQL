import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'http://localhost:4000/graphql';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: []
})

export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink){
    apollo.create({
      link: httpLink.create({uri}),
      cache: new InMemoryCache()
    });
  }
}
