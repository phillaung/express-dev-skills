const skills = [
    { id: 1, name: 'HTML', level: 2 },
    { id: 2, name: 'CSS', level: 5 },
    { id: 3, name: 'JavaScript', level: 3 },
    { id: 4, name: 'C', level: 3 },
    { id: 5, name: 'Python', level: 4 },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = skills[skills.length - 1].id + 1
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, newSkill) {
    id = parseInt(id)
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1, newSkill)
}