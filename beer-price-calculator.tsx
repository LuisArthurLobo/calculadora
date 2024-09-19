"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function BeerPriceCalculator() {
  const [quantity, setQuantity] = useState(1)
  const [pricePerBeer, setPricePerBeer] = useState(5)
  const [taxRate, setTaxRate] = useState(10)
  const [totalPrice, setTotalPrice] = useState(0)

  const calculateTotal = () => {
    const subtotal = quantity * pricePerBeer
    const tax = subtotal * (taxRate / 100)
    const total = subtotal + tax
    setTotalPrice(total)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Beer Price Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pricePerBeer">Price per Beer ($)</Label>
          <Input
            id="pricePerBeer"
            type="number"
            min="0"
            step="0.01"
            value={pricePerBeer}
            onChange={(e) => setPricePerBeer(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="taxRate">Tax Rate (%)</Label>
          <Input
            id="taxRate"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-4">
        <Button onClick={calculateTotal} className="w-full">Calculate Total</Button>
        {totalPrice > 0 && (
          <div className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}