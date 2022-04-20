# WonderKit by MakeKit - Robotarm


## Vi begynner med lysbrytere

Det første vi gjør er å bruke knapp A og B til å slå lyset av og på 

Vi trenger da to blokker fra ``||input:Inndata||``, som vist under

```cards
input.onButtonPressed(Button.A, function () {
	
})
```

En for pins.digitalWritePin(DigitalPin.P0, 0) og en for ``||input:når knapp B trykkes||``, disse skal vi bruke til å slå den av og på med, vi vil da ha denne koden

```blocks
input.onButtonPressed(Button.A, function () {
	
})

input.onButtonPressed(Button.B, function () {
	
})
```
### Legge til hendelse når knappene trykkes
Her skal vi bruke noe som kalles servoportene, det er de gullfargede kantene nederst på micro:bit kortet, markert med 0,1 og 2, vi skal bruke port/Pinne nr 1,
hvis du husker fra byggingen så er det denne vi koblet lysdioden til, ved hjelp av krokodille klemmer.

Vi må da gå til ``||advanced:Avansert nederst i menyen ||`` der finner du ``||pins:Tilkoblinger ||``

Vi trenger to av blokken under også, en i knapp A og en i knapp B

```cards
pins.digitalWritePin(DigitalPin.P0, 0)
```
<br />
Vi må nå sette denne til P1 som vist under
```blocks
input.onButtonPressed(Button.A, function () {
pins.digitalWritePin(DigitalPin.P1, 1)	
})

input.onButtonPressed(Button.B, function () {
pins.digitalWritePin(DigitalPin.P1, 0)	
})
```

## Bruke simulatoren i makecode for å se at dette fungerer

La oss teste koden

```sim
input.onButtonPressed(Button.A, function () {
pins.digitalWritePin(DigitalPin.P1, 1)	
})

input.onButtonPressed(Button.B, function () {
pins.digitalWritePin(DigitalPin.P1, 0)	
})
```

Trykk på knappen A vil vise med rødt at det er nå strøm på Pinne 1, når man trykker på knapp B så vil den bli vanlig og av, det vil si at den er uten strøm på

// kun for å generere bilder og snippets riktig, må være med i dokumentet
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>