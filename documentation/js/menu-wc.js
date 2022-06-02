'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">PizzaFreshBackEnd documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' : 'data-target="#xs-controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' :
                                            'id="xs-controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' : 'data-target="#xs-injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' :
                                        'id="xs-injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' : 'data-target="#xs-controllers-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' :
                                            'id="xs-controllers-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' : 'data-target="#xs-injectables-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' :
                                        'id="xs-injectables-links-module-AuthModule-e339818234ef57794248bb9db3744bcccfabb4da25d61f21d1cca372b709576f049294665d78af03bcae34d12bbf04a6fc6be8e5b51dde39550c47ff25b2a4e4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' : 'data-target="#xs-controllers-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' :
                                            'id="xs-controllers-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' : 'data-target="#xs-injectables-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' :
                                        'id="xs-injectables-links-module-OrderModule-b7de684e4fc7406517a8b09536d384a4ea2f45b3b377d06b1f260fb932d4668c56697a4f6435b147690e9e4784d92628c8b501d9bc5263e61cba22f1388cab34"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-a2cc3520fd606851e19dbc12c3708b23201abab8cd829aa520177246cf61de4088ebcf8dfbc9cb996c809079cdd9bc56afc01b8c4b8d797f2437ac10e3b30ded"' : 'data-target="#xs-injectables-links-module-PrismaModule-a2cc3520fd606851e19dbc12c3708b23201abab8cd829aa520177246cf61de4088ebcf8dfbc9cb996c809079cdd9bc56afc01b8c4b8d797f2437ac10e3b30ded"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-a2cc3520fd606851e19dbc12c3708b23201abab8cd829aa520177246cf61de4088ebcf8dfbc9cb996c809079cdd9bc56afc01b8c4b8d797f2437ac10e3b30ded"' :
                                        'id="xs-injectables-links-module-PrismaModule-a2cc3520fd606851e19dbc12c3708b23201abab8cd829aa520177246cf61de4088ebcf8dfbc9cb996c809079cdd9bc56afc01b8c4b8d797f2437ac10e3b30ded"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' : 'data-target="#xs-controllers-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' :
                                            'id="xs-controllers-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' : 'data-target="#xs-injectables-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' :
                                        'id="xs-injectables-links-module-ProductModule-398985f06701cb77ed7d127424401836ca71543555584f0796a7a9a0d4de38c493c4b1111747c857f9abd676681d7c54c7b3c2f8a2ce8b2717f305fa6bac17e0"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' : 'data-target="#xs-controllers-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' :
                                            'id="xs-controllers-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' : 'data-target="#xs-injectables-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' :
                                        'id="xs-injectables-links-module-TableModule-9f0cbc5df3ee593f0aeaafb01256e8e673ad85aac7fe8ecd8375feab37081f7e0be15b83d42a8c06ea22e8434b8d18d9dbcd0817a392deba5bacf2a42e19df2c"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' : 'data-target="#xs-controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' :
                                            'id="xs-controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' : 'data-target="#xs-injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' :
                                        'id="xs-injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});