function create_selectors(monsters) {
  var selectors = document.createElement('tr');
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
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
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
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
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
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
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
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
    build_monster_list(monsters)
  } else {
    document.getElementById('body').removeChild(document.getElementById('monster_list'))
    build_monster_list(monster_data)
  }
}
