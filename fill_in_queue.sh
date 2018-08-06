export QUEUE_URL=`aws sqs get-queue-url --queue-name MyQueue --query 'QueueUrl' --output text --profile=sls`
for run in {1..100}
do
  aws sqs send-message --queue-url ${QUEUE_URL} --message-body "test" --profile=sls
done