#Write an ARM assembly program that compares two register values and #prints whether they are equal or not

	.text
	.global main
	
main:
	su sp, sp, #4
	str lr, [sp,#0]
	
	mov r1, #25
	mov r2, #40
	cmp r1,r2
	
	bne Else
	
	
	ldr r0, =equal
	#bl printf
	
	b EXIT
	

Else:
	ldr r0, =not_eq
	#bl printf
	

EXIT:
	bl printf
	
	ldr lr, [sp,#0]
	add sp, sp, #4
	
	mov pc, lr
	
	
	.data
	
equal: .asciz "The numbers are equal\n"
not_eq: .asciz "The numbers are not equal\n"

	
	
	
	
