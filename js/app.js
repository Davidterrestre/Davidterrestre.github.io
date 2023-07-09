const { createApp } = Vue;

createApp({
  data() {
    return {
      productos: [],
      url: 'http://r3flexx.pythonanywhere.com/productos',
      error: false,
      cargando: true,
      id: 0,
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.productos = data;
          this.cargando = false;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');