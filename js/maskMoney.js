const { format : formatPrice } = new Intl.NumberFormat('pt-br', {
  style:'currency',
  currency:'BRL'
});

formatPrice(123.90);