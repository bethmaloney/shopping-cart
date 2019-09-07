export { default as CommonStyles } from "./styles.module.scss";

export function formatToCurrency(amount: number) {
  var formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });

  return formatter.format(amount);
}
