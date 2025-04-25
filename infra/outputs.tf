output "ec2_public_ip" {
  value = aws_instance.portfolio.public_ip
}

output "ssh_command" {
  value = "ssh ubuntu@${aws_instance.portfolio.public_ip}"
}
