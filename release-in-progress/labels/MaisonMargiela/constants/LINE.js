/**
 * Initialization of LINE.
 *
 * Initialization of all Maison Margiela lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for all Maison Margiela lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINE = deepFreeze({

    // 0
    '(0)': new Line("⓪ \"Artisanal\" collection for women", // & men?
        new OperationPeriod(new Collection(1989, Season.S))),
    '(0)(10)': new Line("⓪⑩ \"Artisanal\" collection for men",
        new OperationPeriod(new Collection(1999, Season.S))),
    
    // 1
    //'1': new Line("① The collection for women",
    //    new OperationPeriod(new Collection(1989, Season.S), new Collection(2008, Season.S))),
    //'(1)': new Line("① The collection for women",
    //    new OperationPeriod(new Collection(2008, Season.W))),
    '(1)': new Line("① The collection for women",
        new OperationPeriod(new Collection(1989, Season.S))),
    'SHOW': new Line("The défilé collection for women",
        new OperationPeriod(new Collection(2008, Season.W))),

    // 3
    '(3)': new Line("③ Fragrances for women & men",
        new OperationPeriod(new Collection(2010))),

    // 4
    '(4)': new Line("④ A wardrobe for women",
        new OperationPeriod(new Collection(2004, Season.S))),

    // 6
    '(6)': new Line("⑥ Basic garments for women",
        new OperationPeriod(new Collection(1998, Season.S), new Collection(2004, Season.S))),
    'MM6': new Line("MM⑥ Garments for ♀",
        new OperationPeriod(new Collection(2004, Season.W))),

    // 8
    '(8)': new Line("⑧ Eyewear collection",
        new OperationPeriod(new Collection(2008, Season.S))),

    // 10
    '(10)': new Line("⑩ The collection for men",
        new OperationPeriod(new Collection(1999, Season.S))),

    // 11
    '(11)': new Line("⑪ A collection of accessories for women & men",
        new OperationPeriod(new Collection(2005, Season.W))),

    // 12
    '(12)D': new Line("⑫ A collection of fine jewelry [in collaboration with Damiani]",
        new OperationPeriod(new Collection(2008), new Collection(2011))),
    '(12)': new Line("⑫ A collection of fine jewelry",
        new OperationPeriod(new Collection(2014, Season.W), new Collection(2014, Season.W))),

    // 13
    '(13)': new Line("⑬ Objects & publications",
        new OperationPeriod(new Collection(1998, Season.W))),

    // 14
    '(14)': new Line("⑭ A wardrobe for men",
        new OperationPeriod(new Collection(2005, Season.S))),

    // 15
    '(15)': new Line("⑮ Mail order [for 3 Suisses]",
        new OperationPeriod(new Collection(1999, Season.S), new Collection(2000, Season.S))),

    // 22
    '(22)': new Line("㉒ A collection of shoes for women",
        new OperationPeriod(new Collection(1998, Season.W), new Collection(2005, Season.S))),
    '(22)U': new Line("㉒ A collection of shoes for women & men",
        new OperationPeriod(new Collection(2005, Season.W))),



});

export default LINE;