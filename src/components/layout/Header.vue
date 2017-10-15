<template lang="pug">
    section.hero.is-dark
        nav.navbar
            .container
                .navbar-brand
                    a.navbar-item
                        h1.title Daniel Pereira
                    span.navbar-burger.burger(data-target='navbarMenuHeroB')
                    

                #navbarMenuHeroB.navbar-menu
                    .navbar-end
                        router-link.navbar-item(to='as')
                            | Sobre mi
                        router-link.navbar-item(to='')
                            | Proyectos
                        router-link.navbar-item(to='')
                            | Articulos
        
</template>