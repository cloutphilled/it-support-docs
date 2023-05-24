# Deaktiverede plugins i Outlook og Word

## Aktiver plugins

<p style="color: #41B883; border: 1px solid #41B883; border-radius:5px; padding: 1rem;">Plugins i Word og Outlook har det med at deaktivere, typisk vil det være SBSYS, Autosignatur, Send sikker og Dynamic Template.</p>


> Plugins i både Word og Outlook genaktiveres på samme måde:



![](plugin1.png)
```js
Start med at tryk på 'Filer'
```

![](plugin2.png)
```js
Vælg derefter 'Indstillinger'
```

![](plugin3.png)
```js
Tryk på 'Tilføjelsesprogrammer'
```

![](plugin4.png)
```js
Vælg 'Deaktiverede elementer' i menuen som er placeret nederst i vinduet
```

![](plugin5.png)
```js
Marker det deaktiverede plugin og tryk på 'Aktiver'
```

![](plugin6.png)
```js
Gå derefter tilbage og vælg 'COM-tilføjelsesprogrammer'
```

![](plugin7.png)
```js
Hvis det er at pluginnet står som 'Fjernet' efter aktiveringen
Så skal man yderligere ind i 'Registreringseditor' og aktivere pluginnet der også 
```



## Registreringseditor

![](plugin8.png)
```js
Åben først 'Registreringseditor'
```

![](plugin9.png)
```js
Fold derefter 'HKEY_CURRENT_USER' ud
```

![](plugin10.png)
```js 
Fold så 'SOFTWARE' og 'Microsoft' ud
```

![](plugin11.png)
```js
Afhængigt af det pågældende plugin så fold enten 'Outlook' eller 'Word' ud
Fold så 'Addins' ud og tryk på det pågældende plugin
```

![](plugin13.png)
```js
Dobbeltklik på 'LoadBehavior' og sæt værdien til 3
```



