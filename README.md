# Sandbox Angular – UserCard

> Mini-projets Angular réalisés dans le cadre de mon apprentissage (2025).  
> Focus sur les composants, services, interactions, et bonnes pratiques Angular.

## Objectifs

- Comprendre et maîtriser les concepts Angular 2+ (components, services, inputs/outputs, pipes, routing, etc.)
- Construire des éléments UI réutilisables (ex : UserCard, modales, listes filtrées)
- Appliquer Tailwind CSS, gestion d’état, interactions utilisateur

## Contenu

| Composant           | Description                                                | Concepts Angular                         |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------- |
| UserCardComponent   | Affichage dynamique d’utilisateurs avec détails togglables | `@Input()`, `*ngIf`, `*ngFor`            |
| DeleteConfirmModal  | Suppression avec confirmation                              | `@Output()`, EventEmitter                |
| RoleFilter          | Filtrage conditionnel                                      | `pipe`, `*ngIf`, gestion d’état          |
| UserDetailComponent | Affichage des infos utilisateur via route dynamique        | `ActivatedRoute`, `routerLink`, `Guard`  |
| NewUserReactiveForm | Formulaire de création utilisateur réactif avec validation | `FormGroup`, `Validators`, `formControl` |

## 📅 Évolution prévue

- [x] Ajout du routing
- [x] Formulaire réactif avec validation
- [x] Guard de route sur `/users/:id`
- [x] Gestion d’état avec `BehaviorSubject`
- [ ] Appel d’API fictive (JSON server)
- [ ] Auth / Guard / Lazy Loading (avril 2025)
