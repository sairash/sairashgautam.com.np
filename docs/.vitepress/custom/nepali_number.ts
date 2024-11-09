export function toNepali (num: string | number) {
    const numStr = num.toString()
    const numArr = numStr.split('')
    const numArrLen = numArr.length
    const devnagari = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  
    let nepali_number = ''
    for (let i = 0; i < numArrLen; i++)
      nepali_number += devnagari[parseInt(numArr[i])]
  
    return nepali_number
}