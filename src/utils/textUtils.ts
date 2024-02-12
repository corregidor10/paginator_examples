/**
 * @param text Text to check if contains the filter text
 * @param filterText Text to filter
 * @returns true if the text contains the filter text
 * @returns false if the text does not contain the filter text
 * */

export const doesTextContains = (text: string, filterText: string): boolean => {
    return text?.toLowerCase().includes(filterText.toLowerCase());
};
