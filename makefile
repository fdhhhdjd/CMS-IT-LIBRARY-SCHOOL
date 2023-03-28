
#!@ Author: Nguyễn Tiến Tài.
#! Description: Make run auto service all.
#!@ Created_At : 16-03-2022.

# Show name source code
run-default:
	echo "ITC Libary Book Management"

# Run install node_module
run-install:
	if test -d $(NODE_MODULES); then \
      echo "Node modules already installed"; \
      exit 1; \
	else \
      pnpm install; \
	fi

# Check syntax  source code
lint:
	pnpm lint

# Run source code 
dev:
	pnpm dev

# build source 
build:
	pnpm build

# run all install -> run local
run-all-build:
	@install
	@dev
