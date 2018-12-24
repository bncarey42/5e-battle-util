function build_monster_list(monster_selection) {
  var body = document.getElementById('main')
  for(mon in monster_selection){
    console.log(JSON.stringify(monster_data[mon]))
  }
  var list = this.get_monster_list(monster_selection);
  body.appendChild(list);
}

function get_monster_list(monster_selection){
  var monsterlist = document.createElement('table')
  monsterlist.setAttribute('style', 'width=100%; border: 1px solid black;')
  monsterlist.setAttribute('id', 'monster_list')
  monsterlist.appendChild(create_selectors(monster_selection))
  monsterlist.appendChild(this.create_table_header())
  for(var monster in monster_selection){
    var monsterObj = monster_data[monster]
    monsterlist.appendChild(this.tableize_monster(monsterObj))
  }
  return monsterlist
}

function tableize_monster(monster){
  var data = document.createElement('tr')
  data.setAttribute('class', 'monsters')
  var name = document.createElement('td')
  var link = document.createElement('a')
  link.setAttribute('href', getDnDBeyondUrl(monster.name))
  link.setAttribute('target', '_blank')
  link.appendChild(document.createTextNode(monster.name))
  name.appendChild(link)
  data.appendChild(name)
  var type = document.createElement('td')
  type.appendChild(document.createTextNode(monster.type))
  data.appendChild(type)
  var alignment = document.createElement('td')
  alignment.appendChild(document.createTextNode(monster.alignment))
  data.appendChild(alignment)
  var cr = document.createElement('td')
  cr.appendChild(document.createTextNode(monster.challenge + ' (' + monster.xp + ')'))
  data.appendChild(cr)
  var source = document.createElement('td')
  source.appendChild(document.createTextNode(monster.page))
  data.appendChild(source)
  return data
}

function create_table_header() {
  var header = document.createElement('tr')
  header.setAttribute('class', 'headers')
  var name = document.createElement('th')
  name.appendChild(document.createTextNode('Name'))
  header.appendChild(name)
  var type = document.createElement('th')
  type.appendChild(document.createTextNode('Type'))
  header.appendChild(type)
  var alignment = document.createElement('th')
  alignment.appendChild(document.createTextNode('Alignment'))
  header.appendChild(alignment)
  cr = document.createElement('th')
  cr.appendChild(document.createTextNode('CR (XP)'))
  header.appendChild(cr)
  var source = document.createElement('th')
  source.appendChild(document.createTextNode('Source'))
  header.appendChild(source)
  return header
}

function create_selectors(monsters) {
  var selectors = document.createElement('tr')
  selectors.setAttribute('class', 'selectors')
  selectors.appendChild(document.createElement('td'))
  var typeSelector = document.createElement('td')
  typeSelector.appendChild(this.getTypes(monsters))
  var crSelector = document.createElement('td')
  crSelector.appendChild(this.getCRs(monsters))
  var alignSelector = document.createElement('td')
  alignSelector.appendChild(this.getAlignments(monsters))
  var sourceSelector = document.createElement('td')
  sourceSelector.appendChild(this.getSources(monsters))
  selectors.appendChild(typeSelector)
  selectors.appendChild(alignSelector)
  selectors.appendChild(crSelector)
  selectors.appendChild(sourceSelector)
  return selectors
}

function getTypes(monsters) {
  var typeSelector = document.createElement('select')
  typeSelector.setAttribute('id', 'type_selector')
  typeSelector.setAttribute('onchange', 'filter_by_type()')
  var types = []
  for(monster in monsters) {
    var monsterObj = monster_data[monster]
    if (!types.includes(monsterObj.type)) {
      types.push(monsterObj.type)
    }
  }
  var option = document.createElement('option')
  typeSelector.appendChild(option)
  types.forEach( function(type){
    option = document.createElement('option')
    option.appendChild(document.createTextNode(type))
    typeSelector.appendChild(option)
  })
  var option = document.createElement('option')
  option.appendChild(document.createTextNode('*'))
  typeSelector.appendChild(option)
  return typeSelector
}

function getAlignments(monsters) {
  var alignSelector = document.createElement('select')
  alignSelector.setAttribute('id', 'alignment_selector')
  alignSelector.setAttribute('onchange', 'filter_by_alignment()')
  var align = []
  for(monster in monsters) {
    var monsterObj = monster_data[monster]
    if (!align.includes(monsterObj.alignment)) {
      align.push(monsterObj.alignment)
    }
  }
  var option = document.createElement('option')
  alignSelector.appendChild(option)
  align.forEach( function(a){
    option = document.createElement('option')
    option.appendChild(document.createTextNode(a))
    alignSelector.appendChild(option)
  })
  var option = document.createElement('option')
  option.appendChild(document.createTextNode('*'))
  alignSelector.appendChild(option)
  return alignSelector
}

function getCRs(monsters) {
  var crSelector = document.createElement('select')
  crSelector.setAttribute('id', 'cr_selector')
  crSelector.setAttribute('onchange', 'filter_by_cr()')
  var cr = []
  for(monster in monsters) {
    var monsterObj = monster_data[monster]
    if (!cr.includes(monsterObj.challenge)) {
      cr.push(monsterObj.challenge)
    }
  }
  cr.sort(function(a, b){return a-b})
  var option = document.createElement('option')
  crSelector.appendChild(option)
  cr.forEach( function(cr){
    option = document.createElement('option')
    option.appendChild(document.createTextNode(cr))
    crSelector.appendChild(option)
  })
  var option = document.createElement('option')
  option.appendChild(document.createTextNode('*'))
  crSelector.appendChild(option)
  return crSelector
}

function getSources(monsters) {
  var sourceSelector = document.createElement('select')
  sourceSelector.setAttribute('id', 'source_selector')
  sourceSelector.setAttribute('onchange', 'filter_by_source()')
  var source = []
  for(monster in monsters) {
    var monsterObj = monster_data[monster]
    if (!source.includes(monsterObj.page.substring(0,3).trim())) {
      source.push(monsterObj.page.substring(0,3).trim())
    }
  }
  var option = document.createElement('option')
  sourceSelector.appendChild(option)
  source.forEach( function(page){
    option = document.createElement('option')
    option.appendChild(document.createTextNode(page))
    sourceSelector.appendChild(option)
  })
  var option = document.createElement('option')
  option.appendChild(document.createTextNode('*'))
  sourceSelector.appendChild(option)
  return sourceSelector
}

function filter_by_type() {
  var typeVal = document.getElementById('type_selector').value
  if(typeVal != '*'){
    var monsters = {}
    for (monster in monster_data) {
      if(monster_data[monster].type == typeVal) {
        monsters[monster] = monster_data[monster]
      }
    }
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monster_data)
  }
}

function filter_by_alignment() {
  var alignVal = document.getElementById('alignment_selector').value
  if(alignVal != '*'){
    var monsters = {}
    for (monster in monster_data) {
      if(monster_data[monster].alignment == alignVal) {
        monsters[monster] = monster_data[monster]
      }
    }
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monster_data)
  }
}

function filter_by_cr() {
  var crVal = document.getElementById('cr_selector').value
  if(crVal != '*'){
    var monsters = {}
    for (monster in monster_data) {
      if(monster_data[monster].challenge == crVal) {
        monsters[monster] = monster_data[monster]
      }
    }
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monster_data)
  }
}

function filter_by_source() {
  var sourceVal = document.getElementById('source_selector').value.substring(0,2).trim();
  if(sourceVal != '*'){
    var monsters = {}
    for (monster in monster_data) {
      if(monster_data[monster].page.includes(sourceVal)) {
        monsters[monster] = monster_data[monster]
      }
    }
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('main').removeChild(document.getElementById('monster_list'))
    build_monster_list(monster_data)
  }
}

function getDnDBeyondUrl(name){
  var dashedName = name.replace(/ /g,"-")
  return 'https://www.dndbeyond.com/monsters/' + dashedName
}
