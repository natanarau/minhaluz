const maskValorc = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d)/, '$1,$2')
    .replace(/(\d{8})\d+?$/, '$1');
};
const maskReal = (value) => {
  var v = value.replace(/\D/g, '');
  v = (v / 100).toFixed(2) + '';
  v = v.replace('.', ',');
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  v = v.replace(/(\d)(\d{3}),/g, '$1.$2,');
  return (value = v);
};
const maskBandeira = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d)/, '$1,$2')
    .replace(/(\d{4})\d+?$/, '$1');
};
const maskPorcento = (value) => {
  var p = value.replace(/\D/g, '');
  p = (p / 100).toFixed(2) + '';
  p = p.replace(',', '.');
  p = p.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  p = p.replace(/(\d)(\d{3}),/g, '$1.$2,');
  return (value = p);
};
export { maskValorc, maskReal, maskBandeira, maskPorcento };
