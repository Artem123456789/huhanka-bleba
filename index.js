let consonat_letters = [
    'б', 'в', 'г', 'д', 'ж', 'з',
    'й', 'к', 'л', 'м', 'н', 'п',
    'р', 'с', 'т', 'ф', 'х', 'ц',
    'ч', 'ш', 'щ'
];
let collocation = "буханка хлеба";
let final_word_should = "хуханка блеба";

let space_between_words_index;
let first_word_consonal_letter_index;
let second_word_consonal_letter_index;
let first_word_collocation;
let second_word_collocation;

for (let index = 0; index < collocation.length; index++) {
    if(collocation.charAt(i) == ' ')
    {
        space_between_words_index = i;
        break;
    }
}

first_word_collocation = collocation.substr(0, space_between_words_index);
second_word_consonal_letter_index = collocation.substr(space_between_words_index, collocation.length);

for (let i = 0; i < first_word_collocation.length; i++) {
    let letter_found = false;
    for (let j = 0; j < consonat_letters.length; j++) {
        if(first_word_collocation.charAt[i] == consonat_letters[j])
        {
            first_word_consonal_letter_index = i;
            letter_found = false;
            break;
        }
    }
    if(letter_found) break;
}

let final_word;