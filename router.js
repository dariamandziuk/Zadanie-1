const Wszystko = { template: `<main class="results">
  <div class="results-wrapper">
        <h2 class="header">Lorem Ipsum</h2>
            <a class="Link" >
            <p class="Link">https://lorem.com</p>
            </a>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non felis dictum
                tellus sagittis sollicitudin quis eu erat. Duis metus ante, tincidunt a justo et, auctor laoreet augue.
            </p>
    </div>

    <div class="results-wrapper">
            <h2 class="header">Lorem Ipsum</h2>
                <a class="Link" >
                <p class="Link">https://lorem.com</p>
                </a>
                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non felis dictum
                    tellus sagittis sollicitudin quis eu erat. Duis metus ante, tincidunt a justo et, auctor laoreet augue.
                </p>
        </div>

    <div class="results-wrapper">
        <h2 class="header">Lorem Ipsum</h2>
            <a class="Link" >
            <p class="Link">https://lorem.com</p>
            </a>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non felis dictum
                tellus sagittis sollicitudin quis eu erat. Duis metus ante, tincidunt a justo et, auctor laoreet augue.
            </p>
    </div>
</main>` }

const Wiadomosci = { template: `<div class="tab">Wiadomosci</div>` }
const Grafika = { template: '<div class="tab">Grafika</div>' }
const Zakupy = { template: '<div class="tab">Zakupy</div>' }
const Filmy = { template: '<div class="tab">Filmy</div>' }
const Wiecej = { template: '<div class="tab">Wiecej</div>' }
const Ustawienia = { template: '<div class="tab">Ustawienia</div>' }
const Narzedzia = { template: '<div class="tab">Narzędzia</div>' }

const routes = [
  { path: '/wszystko', component: Wszystko },
  { path: '/wiadomosci', component: Wiadomosci },
  { path: '/grafika', component: Grafika },
  { path: '/zakupy', component: Zakupy },
  { path: '/filmy', component: Filmy },
  { path: '/wiecej', component: Wiecej},
  { path: '/ustawienia', component: Ustawienia},
  { path: '/narzedzia', component: Narzedzia }
]


const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')
