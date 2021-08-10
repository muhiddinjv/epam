const data = ["java", "javascript", "python"];

function createAutoComplete(data) {
    return function(input) {
        if (!input || !data) { return [];}
        let words = data.filter((word) => {
            const regex = new RegExp(`^${input}`, "gi");
            return word.match(regex);
        });
        return words;
    };
}

const autocomplete = createAutoComplete(data);

module.exports = {
    createAutoComplete,
    autocomplete
};
