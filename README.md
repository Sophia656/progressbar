## https://sophia656.github.io/progressbar/

        1. ProgressBar
        Input props:
        1. items - data array:
        [
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 23},
        ...
        ]
        2. height - number, bar line height
        3. width - number, bar line width
        Total is calculated by this data (as a sum of each value), and the bar line and its legend are built basing on fraction of value to total
        0-value bars are not displayed, non-zero values always have not less than 1 bar (bars amount is an integer)