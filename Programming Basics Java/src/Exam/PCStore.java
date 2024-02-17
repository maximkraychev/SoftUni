package Exam;

import java.util.Scanner;

public class PCStore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double priceCPU = Double.parseDouble(scanner.nextLine()) * 1.57;
        double priceGPU = Double.parseDouble(scanner.nextLine()) * 1.57;
        double priceRAM = Double.parseDouble(scanner.nextLine()) * 1.57;
        int numberOfRAMMemory = Integer.parseInt(scanner.nextLine());
        double discount = Double.parseDouble(scanner.nextLine());

        double priceForAllRAM = priceRAM * numberOfRAMMemory;
        priceCPU *= (1 - discount);
        priceGPU *= (1 - discount);


        System.out.printf("Money needed - %.2f leva.", priceCPU + priceGPU + priceForAllRAM);
    }
}
