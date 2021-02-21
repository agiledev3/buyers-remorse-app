const LocalStorageSource = {
  read(name) {
    var value = localStorage.getItem(name);
    if(value)
        return JSON.parse(value);
    return [];
  },

  write(name, entity, id) {
    var source = this.read(name);

    //try remove old version if exists
    if(id) {
      source = source.filter(e => e.id !== id);
    }else{
      //set a unique id
      entity.id = this.calculateNextId(source);
    }
    source.push(entity)

    localStorage.setItem(name, JSON.stringify(source));
  },

  //emulates identity generation
  calculateNextId(entities) {
    if(!entities || entities.length === 0)
      return 1;
    return Math.max(...entities.map((element) => element.id)) + 1;
  }
}

export default LocalStorageSource;
