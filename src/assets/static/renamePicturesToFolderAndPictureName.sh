for file in *.JPG; do
    mv "$file" "${PWD##*/}.${file%.txt}"
done

