# CC-TODO-Task

Repo für die CyberCurriculum Programmieraufgabe.


## Model
<img src='./CCTaskModel.excalidraw.svg'>

## Task Description
Du sollst eine interaktive To-Do Liste für eine Webanwendung entwickeln. Diese Liste ermöglicht es den Nutzern, Aufgaben hinzuzufügen, zu bearbeiten, abzuschließen und zu löschen. Die Anwendung soll mit `TypeScript`, `HTML`, `CSS` implementiert werden. Ob du ein Framework, wie `React` oder `Svelte` benutzt, steht dir frei.

## Requirements
### Erstellen einer einfachen Benutzeroberfläche:
- Ein Textfeld zum Hinzufügen neuer Aufgaben.
- Ein Button zum Hinzufügen der Aufgabe zur Liste.
- Eine Liste, die alle hinzugefügten Aufgaben anzeigt.
- Für jede Aufgabe soll es eine Checkbox zum Markieren geben, wenn sie abgeschlossen ist.
- Für jede Aufgabe soll es einen Button zum Löschen der Aufgabe geben.

### Interaktive Funktionalität:
- **Hinzufügen von Aufgaben:** Beim Klick auf den "Hinzufügen"-Button soll die Aufgabe zur Liste hinzugefügt werden.
- **Markieren von Aufgaben als erledigt:** Beim Klick auf das Checkbox-Element soll der Status der Aufgabe zwischen "erledigt" und "offen" umgeschaltet werden (dargestellt durch das Durchstreichen des Textes und das Anpassen der Farbe der Aufgabe).
- **Löschen von Aufgaben:** Beim Klick auf den Löschen-Button soll die entsprechende Aufgabe aus der Liste entfernt werden.

### Datenhaltung:
- Die Aufgaben sollen im `localStorage` des Browsers gespeichert werden, sodass die Liste beim Neuladen der Seite nicht verloren geht.
- Der Status einer Aufgabe (offen oder erledigt) soll ebenfalls im `localStorage` gespeichert werden.
### Validierung:
- Das Hinzufügen einer Aufgabe soll nur dann möglich sein, wenn das Textfeld nicht leer ist.
- Wenn der Benutzer versucht, eine leere Aufgabe hinzuzufügen, soll eine entsprechende Fehlermeldung angezeigt werden.