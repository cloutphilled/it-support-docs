# Reset af KMD password

<p style="color: #00CC66; border: 1px solid rgba(0, 204, 102, 1); border-radius:5px; padding: 1rem;">Denne guide er til at nulstille brugerpasswords i KMD</p>

---
![](kmd1.png)
```
Søg først efter 'KMD' og åben appen
```
---
![](kmd2.png)
```
Login med dit administrative kmd login
```
---
![](kmd3.png)
```
Indtast 'CICS' og tryk enter
```
---
![](kmd4.png)
```
Indtast kommandoen 'z725' for at nulstille password for en bestemt bruger
```
---
![](kmd5.png)
```
Indtast et nyt engangskodeord og ændre Aktiv fra 'N' til 'J'
Tryk derefter enter og så er koden nulstillet
```
---

<p style="color: #00CC66; border: 1px solid rgba(0, 204, 102, 1); border-radius:5px; padding: 1rem;">Hvis brugernavnet på personen skal findes, kan det gøres som nedenstående</p>

---
![](kmd6.png)
```
Indtast kommandoen 'z727' for at finde bruger
```
---
![](kmd7.png)
```
Indtast '1' for at vælge 'Ajourføring af brugeroplysninger'
```
---
![](kmd8.png)
```
Indtast navnet for den pågældende bruger
Derefter vil brugernavnet kunne findes i venstre bjælke
```
---