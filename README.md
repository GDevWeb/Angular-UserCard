# Sandbox Angular – UserCard

> 🧪 Mini-projets Angular réalisés dans le cadre de mon apprentissage (2025).  
> 🎯 Objectif : explorer les composants, services, routing, gestion d’état et bonnes pratiques Angular 2+.

---

## 🎯 Objectifs pédagogiques

- Maîtriser les concepts clés d’Angular (components, services, inputs/outputs, pipes, routing…)
- Construire des composants UI réutilisables et dynamiques
- Structurer un projet maintenable avec un style moderne (Tailwind)
- Appliquer des formulaires réactifs et logique métier

---

## 🔍 Composants développés

| Composant              | Description                                                | Concepts Angular                          |
|------------------------|------------------------------------------------------------|-------------------------------------------|
| `UserCardComponent`    | Carte utilisateur avec affichage dynamique                 | `@Input()`, `*ngIf`, `*ngFor`             |
| `DeleteConfirmModal`   | Fenêtre modale de suppression                              | `@Output()`, `EventEmitter`               |
| `RoleFilterComponent`  | Filtrage conditionnel des utilisateurs                     | `pipe`, `ngIf`, gestion d’état            |
| `UserDetailComponent`  | Route dynamique vers fiche utilisateur                     | `ActivatedRoute`, `routerLink`, `Guard`   |
| `NewUserReactiveForm`  | Formulaire de création utilisateur avec validation         | `FormGroup`, `Validators`, `formControl`  |

---

##  Évolution prévue

- [x] Ajout du routing dynamique
- [x] Reactive Form + validation complète
- [x] Guard de route sur `/users/:id`
- [x] Gestion d’état avec `BehaviorSubject`
- [ ] Intégration d’une API factice (`json-server`)
- [ ] Authentification / Lazy loading / Optimisations

---

##  Remarques

> Ce projet est un **sandbox technique** évolutif.  
> Il fait suite à un **projet professionnel Angular complet** réalisé dans le cadre de mon alternance à la DSI du Conseil d’État (application CRA).

---

🔗 [Démo](https://github.com/GDevWeb/Angular-UserCard) – Ce repo n’est pas destiné à la production mais à la démonstration de compétences Angular.

