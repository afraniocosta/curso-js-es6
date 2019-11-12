class App {
  constructor(){
      this.repositories = [];

      this.formEl = document.getElementById('repo-form');
      this.listEl = document.getElementById('repo-list')
      this.registerHandlers();

  }

  registerHandlers(){
      this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
      event.preventDefault();

      this.repositories.push({
          name: 'rocketseat.com.br',
          description: 'Tire a sua idéia do papel e dê vida à sua startup',
          avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=',
          html_url: 'http://github.com/rocketseat/rocketseat.com.br'
      }); 
      
      this.render(){

      }
  }

  render(){
    this.listEl.innerHTML = '';

  }

}

 new App();
