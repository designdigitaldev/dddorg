#!/bin/bash
PROJECT_DIR="/home/rremilian/dddorg"
PUBLIC_DIR="/home/virtualmin/tld/designdigitaldev.org/public_html"
echo "========================================="
echo "Pornire proces de deploy pentru dddorg..."
cd "$PROJECT_DIR" || exit
echo "⏳  Se construiește site-ul static..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ BUILD EȘUAT"
    exit 1
fi
echo "⏳  Se sincronizează fișierele..."
rsync -av --delete "$PROJECT_DIR/build/" "$PUBLIC_DIR/"
echo "✅  DEPLOY TERMINAT!"
echo "========================================="
