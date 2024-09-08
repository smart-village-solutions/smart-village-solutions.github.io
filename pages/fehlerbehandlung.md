# Fehlerbehandlung

Bei der Nutzung der Smart Village App Mainserver GraphQL API können verschiedene Fehler auftreten, die korrekt behandelt werden müssen, um die Stabilität und Zuverlässigkeit Ihrer Anwendung zu gewährleisten.

## Häufige Fehlerarten

Die häufigsten Fehlerarten, auf die Sie bei der Verwendung der API stoßen können, sind:

### 1. `401 Unauthorized`
Dieser Fehler tritt auf, wenn die Authentifizierung fehlschlägt. Mögliche Ursachen:
- **Ungültiger oder abgelaufener Bearer Token**: Überprüfen Sie, ob der Token noch gültig ist oder erneuern Sie ihn.
- **Fehlender `Authorization`-Header**: Stellen Sie sicher, dass der Bearer Token korrekt im Header mitgesendet wird.

### 2. `400 Bad Request`
Dieser Fehler signalisiert, dass die Anfrage ungültig ist. Mögliche Ursachen:
- **Syntaxfehler in der Abfrage**: Vergewissern Sie sich, dass die GraphQL-Abfrage korrekt formuliert ist.
- **Ungültige oder fehlende Parameter**: Überprüfen Sie, ob alle erforderlichen Parameter vorhanden und korrekt sind.

### 3. `403 Forbidden`
Dieser Fehler tritt auf, wenn der Benutzer nicht die erforderlichen Berechtigungen hat, um auf eine Ressource zuzugreifen. Mögliche Ursachen:
- **Unzureichende Rechte**: Stellen Sie sicher, dass der Benutzer oder die Anwendung die erforderlichen Berechtigungen besitzt.

### 4. `500 Internal Server Error`
Dieser Fehler weist auf ein Problem auf der Serverseite hin. Mögliche Ursachen:
- **Serverüberlastung**: Der Server ist überlastet oder es gibt ein technisches Problem.
- **Fehlerhafte Abfrageverarbeitung**: Es kann ein Problem bei der Verarbeitung der Anfrage auf der Serverseite aufgetreten sein. In diesem Fall sollten Sie die Anfrage später erneut senden.

## Best Practices zur Fehlerbehandlung

Um Fehler effizient zu behandeln, sollten Sie folgende Best Practices beachten:

1. **Implementieren Sie ein robustes Fehlerhandling**:
   - Fangen Sie alle Fehler ab und geben Sie dem Nutzer hilfreiche Fehlermeldungen.
   - Unterscheiden Sie zwischen Client- und Server-seitigen Fehlern, um entsprechend reagieren zu können.

2. **Verwenden Sie Retry-Mechanismen**:
   - Implementieren Sie einen Retry-Mechanismus für temporäre Fehler, wie z. B. bei einem `500 Internal Server Error` oder Netzwerkfehlern.

3. **Beachten Sie die Rate Limits**:
   - Falls in Zukunft Rate Limits eingeführt werden, sollten Sie auf entsprechende Fehlercodes (`429 Too Many Requests`) achten und eine Rückoff-Strategie anwenden.

4. **Loggen Sie alle Fehler**:
   - Stellen Sie sicher, dass alle Fehler in den Logs erfasst werden, um spätere Debugging-Prozesse zu erleichtern und Probleme besser nachvollziehen zu können.

## Fehlercodes und ihre Bedeutung

Hier eine Übersicht der wichtigsten HTTP-Fehlercodes und ihrer Bedeutung:

| Fehlercode  | Bedeutung                         |
|-------------|-----------------------------------|
| 400         | Bad Request – Ungültige Anfrage    |
| 401         | Unauthorized – Authentifizierung fehlgeschlagen |
| 403         | Forbidden – Zugriff verweigert    |
| 500         | Internal Server Error – Problem auf Serverseite |

Durch eine saubere Implementierung von Fehlerbehandlungen stellen Sie sicher, dass Ihre Anwendung auch unter ungünstigen Bedingungen stabil bleibt.
