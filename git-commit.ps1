# Script de PowerShell para automatizar el proceso de commit y evitar errores comunes
# Uso: .\git-commit.ps1 "mensaje del commit"

param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

# Colores para output
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Error-Custom { Write-Host $args -ForegroundColor Red }
function Write-Warning-Custom { Write-Host $args -ForegroundColor Yellow }

# Cambiar al directorio raíz del repositorio
$repoRoot = git rev-parse --show-toplevel
if (-not $repoRoot) {
    Write-Error-Custom "Error: No se encontró un repositorio git"
    exit 1
}
Set-Location $repoRoot

# Verificar que hay cambios para commitear
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Warning-Custom "No hay cambios para commitear"
    exit 0
}

# Mostrar el estado actual
Write-Success "Cambios detectados:"
git status --short

# Agregar todos los cambios
Write-Success "Agregando cambios al staging..."
git add .

# Verificar que se agregaron cambios
$staged = git diff --cached --name-only
if ([string]::IsNullOrWhiteSpace($staged)) {
    Write-Error-Custom "Error: No se pudieron agregar cambios al staging"
    exit 1
}

# Hacer commit
Write-Success "Haciendo commit con mensaje: '$Message'"
git commit -m $Message
if ($LASTEXITCODE -eq 0) {
    Write-Success "✓ Commit realizado exitosamente"
    Write-Warning-Custom "Para pushear: git push"
} else {
    Write-Error-Custom "Error al hacer commit"
    exit 1
}

