# Authentifizierung

Die Smart Village App Mainserver GraphQL API verwendet **OAuth2** zur Authentifizierung und Autorisierung. Um auf geschützte Endpunkte der API zugreifen zu können, muss ein **Bearer Token** in den Anfragen mitgesendet werden.

## Schritte zur Authentifizierung

1.  **API-Key und API-Secret erhalten**
    Um Zugang zur API zu erhalten, müssen Sie Ihre Anwendung registrieren. Nach der Registrierung erhalten Sie einen **API-Key** und ein **API-Secret**, die zur Generierung eines Tokens benötigt werden.
2.  **Token anfordern**
    Verwenden Sie den **API-Key** und das **API-Secret**, um einen Bearer Token über den OAuth2-Token-Endpunkt anzufordern. Typischerweise erfolgt dies über einen `POST`\-Request an den Token-Endpunkt:

    ```
    POST /oauth/token
    Content-Type: application/x-www-form-urlencoded

    grant_type=client_credentials&client_id=YOUR_API_KEY&client_secret=YOUR_API_SECRET
    ```

    **Beispiel-Antwort**:

    ```
    {
      "access_token": "your_bearer_token",
      "token_type": "Bearer",
      "expires_in": 3600
    }
    ```

    Der `access_token` ist der Bearer Token, der für die nachfolgenden API-Requests verwendet wird.
3.  **Token verwenden**
    Fügen Sie den erhaltenen **Bearer Token** in den `Authorization`\-Header Ihrer API-Requests ein. Der Header sollte in folgendem Format gesendet werden:

    ```
    Authorization: Bearer your_bearer_token
    ```

    Der Token muss bei jeder Anfrage an die API beigefügt werden, um Zugriff auf geschützte Ressourcen zu erhalten.

## Token-Gültigkeit und Erneuerung

*   Der Bearer Token hat eine begrenzte Gültigkeit, die in der Antwort des Token-Endpunkts (`expires_in`) angegeben ist. Sobald der Token abläuft, müssen Sie einen neuen Token anfordern, indem Sie den OAuth2-Prozess erneut durchlaufen.
*   Die API unterstützt aktuell keine Token-Erneuerung (Refresh Token). Sie müssen einen neuen Token anfordern, sobald der alte abgelaufen ist.

## Best Practices zur Token-Sicherheit

*   Speichern Sie den **API-Key**, das **API-Secret** und den **Bearer Token** niemals in öffentlich zugänglichen Bereichen, wie z. B. in Client-seitigen Anwendungen oder öffentlichen Repositorys.
*   Verwenden Sie immer verschlüsselte Verbindungen (HTTPS), um sensible Daten wie den Bearer Token sicher zu übertragen.
*   Erneuern Sie Ihren Bearer Token regelmäßig und löschen Sie abgelaufene Tokens.

## Fehlerbehandlung

Wenn die Authentifizierung fehlschlägt, gibt die API einen Fehler mit dem HTTP-Statuscode `401 Unauthorized` zurück. Typische Gründe für einen Fehler könnten sein:

*   Ein ungültiger oder abgelaufener Bearer Token.
*   Ein fehlender `Authorization`\-Header.

Überprüfen Sie in diesen Fällen die Gültigkeit des Tokens und führen Sie die Authentifizierung erneut durch.
