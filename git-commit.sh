#!/bin/bash
# Script para automatizar el proceso de commit y evitar errores comunes
# Uso: ./git-commit.sh "mensaje del commit"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar que se proporcionó un mensaje de commit
if [ -z "$1" ]; then
    echo -e "${RED}Error: Debes proporcionar un mensaje de commit${NC}"
    echo -e "${YELLOW}Uso: ./git-commit.sh 'mensaje del commit'${NC}"
    exit 1
fi

# Cambiar al directorio raíz del repositorio
cd "$(git rev-parse --show-toplevel)" || exit 1

# Verificar que hay cambios para commitear
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}No hay cambios para commitear${NC}"
    exit 0
fi

# Mostrar el estado actual
echo -e "${GREEN}Cambios detectados:${NC}"
git status --short

# Agregar todos los cambios
echo -e "${GREEN}Agregando cambios al staging...${NC}"
git add .

# Verificar que se agregaron cambios
if [ -z "$(git diff --cached --name-only)" ]; then
    echo -e "${RED}Error: No se pudieron agregar cambios al staging${NC}"
    exit 1
fi

# Hacer commit
echo -e "${GREEN}Haciendo commit con mensaje: '$1'${NC}"
if git commit -m "$1"; then
    echo -e "${GREEN}✓ Commit realizado exitosamente${NC}"
    echo -e "${YELLOW}Para pushear: git push${NC}"
else
    echo -e "${RED}Error al hacer commit${NC}"
    exit 1
fi

