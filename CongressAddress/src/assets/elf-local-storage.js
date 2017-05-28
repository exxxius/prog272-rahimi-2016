/**
 * Created by Charlie on 5/8/17.
 */
/*// I added setLocalStorage function to pass the "localStorage is not defined" error in tests.
function setLocalStorage() {
    global.localStorage = {
        getItem: function(key) {
            return this[key];
        },
        setItem: function(key, value) {
            this[key] = value;
        },
        removeItem: function(key) {
            delete this[key];
        }
    };
}*/

function saveToLocalStorageByName(key, item) {
    if (!key) {
        const storageIndex = localStorage.length + 1;
        key = 'key' + storageIndex;
    }

    localStorage.setItem(key, item);
}

function saveToLocalStorage(item) {
    if (typeof item === 'object') {
        item = JSON.stringify(item, null, 4);
    }
    const storageIndex = localStorage.length + 1;
    const key = 'key' + storageIndex;
    localStorage.setItem(key, item);
}

function getLocalStorage() {
    let storage = '';
    let key = '';
    let storageItem;
    for (let i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        storageItem = localStorage.getItem(key);
        if (typeof storageItem === 'object') {
            storageItem = JSON.stringify(storageItem, null, 4);
        }
        if (i === 0) {
            storage = storageItem;
        } else {
            storage = storage + '\n' + storageItem;
        }
    }
    return storage;
}

const ELF_TAG = 'elf';

const padNumber = function(numberToPad, width, padValue) {
    padValue = padValue || '0';
    numberToPad += '';
    if (numberToPad.length >= width) {
        return numberToPad;
    } else {
        return new Array(width - numberToPad.length + 1).join(padValue) + numberToPad;
    }
};

function saveByIndex(item, index) {
    if (typeof item === 'object') {
        item = JSON.stringify(item, null, 4);
    }
    const key = ELF_TAG + padNumber(index, 4, 0);
    localStorage.setItem(key, item);
}

function getByIndex(index) {
    const key = ELF_TAG + padNumber(index, 4, 0);
    return JSON.parse(localStorage.getItem(key));
}

function removeElfKeys() {
    for (var key in localStorage) {
        if (key.startsWith(ELF_TAG)) {
            localStorage.removeItem(key);
        }
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

export {saveByIndex, getByIndex, removeElfKeys,
    saveToLocalStorage, saveToLocalStorageByName,
    getLocalStorage, clearLocalStorage};
