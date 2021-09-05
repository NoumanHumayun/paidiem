export interface Country {
  name: string;
  alpha2Code: string;
  currencies: [Currency];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
