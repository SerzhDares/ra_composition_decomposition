// Курс валют

interface currencyProps {
    USD: number,
    USDChange: string,
    EUR: number,
    EURChange: string,
    oil: number,
    oilChange: string
}

export default function ExchangeRates({USD, USDChange, EUR, EURChange, oil, oilChange}: currencyProps) {
  return (
    <div className="exchange_rates">
        <div className="currency_block">
            <span className="currency">USD MOEX {USD}</span>
            <span className="currency_change">{USDChange}</span>
        </div>
        <div className="currency_block">
            <span className="currency">EUR MOEX {EUR}</span>
            <span className="currency_change">{EURChange}</span>
        </div>
        <div className="currency_block">
            <span className="currency">Нефть {oil}</span>
            <span className="currency_change">{oilChange}</span>
        </div>
    </div>
  )
}
