const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup (form)

const data = {
    study: ["01-01", "01-02", "01-06"],
    water: ["01-03"],
    exercise: ["01-04"],
    game: ["01-05"],
    family: ["01-02", "01-04"],
}

nlwSetup.setData(data)

nlwSetup.load()
