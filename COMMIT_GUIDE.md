# Guía para Hacer Commits sin Errores

Esta guía te ayudará a hacer commits sin errores recurrentes.

## 🚀 Soluciones Rápidas

### Opción 1: Usar el Script de PowerShell (Recomendado para Windows)

```powershell
.\git-commit.ps1 "tu mensaje de commit aquí"
```

### Opción 2: Usar el Script de Bash (Para Git Bash)

```bash
./git-commit.sh "tu mensaje de commit aquí"
```

### Opción 3: Usar Alias de Git (Una vez configurado)

```bash
git cm "tu mensaje de commit aquí"
```

## 📝 Configuración Inicial (Una Sola Vez)

### 1. Hacer los Scripts Ejecutables (Git Bash)

```bash
chmod +x git-commit.sh
```

### 2. Configurar Alias de Git (Opcional)

Para usar los alias, ejecuta:

```bash
git config --local alias.cm "!f() { git add . && git commit -m \"$1\"; }; f"
```

O carga toda la configuración del archivo `.gitconfig.local`:

```bash
git config --local include.path .gitconfig.local
```

### 3. Configurar Git para Windows (Si no está configurado)

```bash
# Configurar autocrlf (ya debería estar configurado)
git config --global core.autocrlf true

# Verificar tu usuario y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## 🔧 Solución de Problemas Comunes

### Error: "nothing to commit, working tree clean"

**Causa**: No hay cambios para commitear o no se agregaron al staging.

**Solución**: Los scripts automáticamente hacen `git add .` antes de commitear.

### Error: "Please tell me who you are"

**Causa**: No está configurado el usuario de Git.

**Solución**:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Error: Problemas con line endings (CRLF/LF)

**Causa**: Conflicto entre Windows (CRLF) y Linux/Mac (LF).

**Solución**: Ya está configurado `autocrlf = true` en la configuración.

### Error: "fatal: not a git repository"

**Causa**: No estás en un directorio con repositorio git.

**Solución**: Asegúrate de estar en la raíz del proyecto (donde está la carpeta `.git`).

## 💡 Flujo de Trabajo Recomendado

1. **Hacer cambios** en tus archivos
2. **Usar el script** para commitear:
   ```powershell
   .\git-commit.ps1 "descripción de los cambios"
   ```
3. **Pushear** (si es necesario):
   ```bash
   git push
   ```

## 📌 Notas Importantes

- Los scripts automáticamente agregan todos los cambios (`git add .`)
- Los scripts verifican que hay cambios antes de intentar commitear
- Los scripts muestran el estado antes de commitear
- Si hay un error, los scripts te informarán qué salió mal

## 🎯 Comandos Útiles

```bash
# Ver estado de los archivos
git status

# Ver cambios en un archivo específico
git diff archivo.js

# Ver qué archivos están modificados
git changed

# Ver último commit
git last

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer cambios en un archivo específico
git restore archivo.js
```

