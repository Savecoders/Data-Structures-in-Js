const person = {
  'javier':12,
  'pablo':18,
  'oscard':11,
  'andres':22,
  'rodrigez':14,
  'pablo':21
}
console.log(
  Object.keys(person)
        .map((name)=> ({name:name,years:person[name]}))
        .sort((a,b)=> b.years - a.years)
        .slice(0,3)
        .map((person)=> person.name)
)
